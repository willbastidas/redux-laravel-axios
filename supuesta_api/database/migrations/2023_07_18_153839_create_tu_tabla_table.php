<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */

 /* datos que se van a mandar el esquema de la base de datos en este caso tu_tabla*/ 

    public function up(): void
    {
        Schema::create('tu_tabla', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('descripcion');
            $table->string('tipo');
            $table->integer('stock');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */

     // ubicacion de la tabla donde se insertaran los datos 
    public function down(): void
    {
        Schema::dropIfExists('tu_tabla');
    }
};
