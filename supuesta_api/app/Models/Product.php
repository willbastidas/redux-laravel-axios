<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'tu_tabla';
    protected $primaryKey = 'id';
    protected $fillable = ['nombre', 'tipo', 'descripcion', 'stock'];
}