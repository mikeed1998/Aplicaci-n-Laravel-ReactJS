<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Data;

class DataController extends Controller
{
    public function index()
    {
        $data = Data::all();
        return response()->json($data);
    }

    public function store(Request $request)
    {
        // Validar los datos recibidos desde el formulario
        $validatedData = $request->validate([
            'nombre' => 'required|string',
            'descripcion' => 'required|string',
        ]);

        // Crear un nuevo objeto de modelo Data y asignar los valores
        $newData = new Data();
        $newData->nombre = $validatedData['nombre'];
        $newData->descripcion = $validatedData['descripcion'];

        // Guardar el nuevo dato en la base de datos
        $newData->save();

        // Retornar una respuesta JSON indicando que los datos se han guardado correctamente
        return response()->json(['message' => 'Datos guardados correctamente'], 201);
    }

}
