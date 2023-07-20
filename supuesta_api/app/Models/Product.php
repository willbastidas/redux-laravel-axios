<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// creacion del modelo en el $table, se debe colocar la tabla que desea que sean enviados los datos
// En fillable se coloca un arreglo de lo datos que pueden ser ingresados por el usuario
class Product extends Model
{
    protected $table = 'tu_tabla';
    protected $primaryKey = 'id';
    protected $fillable = ['nombre', 'tipo', 'descripcion', 'stock'];
}