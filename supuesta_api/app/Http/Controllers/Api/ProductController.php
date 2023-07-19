<?php

namespace App\Http\Controllers\api;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => ['required', 'string', 'min:3'],
            'tipo' => ['required', 'string', 'min:3'],
            'descripcion' => ['required', 'string', 'min:5'],
            'stock' => ['required', 'integer', 'min:1'],
        ]);

        // return response()->json($request);

        DB::beginTransaction();
        try {
            $product = Product::create([
                'nombre' => $request->nombre,
                'descripcion' => $request->descripcion,
                'tipo' => $request->tipo,
                'stock' => $request->stock,
            ]);

            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json('error al mandar datos');
            // return response()->json($th);
        }
        return response()->json('datos insertados');

        //return "sad";
        // $product = Product::create($request->all());

        // return response()->json([
        //     'message' => 'Producto creado exitosamente',
        //     'product' => $product
        //     ], 201);
    }

}
