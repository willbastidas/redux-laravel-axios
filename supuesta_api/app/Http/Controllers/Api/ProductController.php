<?php

namespace App\Http\Controllers\api;

// invocar los datos que se van a utilizar, [modelo de productos]
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    // funcion para realizar validaciones de los datos
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => ['required', 'string', 'min:3'],
            'tipo' => ['required', 'string', 'min:3'],
            'descripcion' => ['required', 'string', 'min:5'],
            'stock' => ['required', 'integer', 'min:1'],
        ]);

        /*  En el request  es para que los datos que son ingresados por el usuario 
        $request-> validate es para que valide los datos y colocarle cierto tipo de
        condicones es este caso ['required'] que sea obligatorio colocarlo 
        ['string']-> el tipo de dato, ['min:3']-> el minimo de datos de que se deben
        ingresar, en el caso de ['integer'] si se coloca un minimo de 1 ['min:1']
        del dato ingresado no puede ser 0
        */
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
            DB::rollBack(); // el rollBack quiere indicar que si algo falla todo la operacion se heche para atras
            return response()->json('error al mandar datos'); 
            // return response()->json($th);
        }
        return response()->json('datos insertados');

        /*
        return "sad";
         $product = Product::create($request->all());

         return response()->json([
             'message' => 'Producto creado exitosamente',
             'product' => $product
            ], 201);*/
    }

}
