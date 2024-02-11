<script setup>

function resetForm() { 
  document.getElementById("dateevent").value = "";
  document.getElementById("hora").value = "";
  document.getElementById("prueba").value = "";
  document.getElementById("titulo").value = "";
  document.getElementById("description").value = "";
  document.getElementById("plazas").value = "";
  document.getElementById("file").value = "";

}
</script>

<template>
 
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card-title class="title">
        <h1>Añadir Nuevo Evento</h1>
      </v-card-title>

      <v-spacer></v-spacer>

      <v-card ref="form">

          <v-file-input :rules="rules" accept="image/png, image/jpeg, image/bmp" placeholder="Añadir foto..." label="Añade foto..."></v-file-input>

        <v-card-text>

          <v-text-field ref="title" v-model="title" label="Title" placeholder="Concert" required></v-text-field>

          <div class="formtwo">

          <div class="dateFields">
          <label for="name"><span class="Asterisk">* </span>Introduce la fecha</label>
          <input type="date" class="form-control " id="dateevent" />
          </div>
          <div class="dateFields">
          <label for="name"><span class="Asterisk">* </span>Añade la hora</label>
          <input type="text" class="form-control form-control-lg" id="hora" />
          </div>
          <div class="check">
          <input type="checkbox" class="prueba" id="prueba" />
          <label for="name"> Recomendado</label>
          </div>
          </div>


          <div class="form-group">
          <label for="name"><span class="Asterisk">* </span>Introduce un titulo</label>
          <input type="text" class="form-control form-control-lg" id="titulo" />

          </div>

          <div class="form-group">
          <label for="name"><span class="Asterisk">* </span>Añade una descripción</label>
          <input type="text" class="form-control form-control-lg" id="description" />

          </div>

          <div class="form-group">
          <label for="name"><span class="Asterisk">* </span>Determina el número de plazas</label>
          <input type="number" class="form-control form-control-lg" id="plazas" />
          </div>

          <div class="form-group">
          <label for="name"><span class="Asterisk">* </span>Añade una imagen</label>
          <input type="file" class="form-control form-control-lg" id="file" />
          </div>

          <div id="buttons-box">
      
            <v-btn  color="yellow-darken-4"  id="reset" @click="resetForm()">Borrar</v-btn>
          <v-btn color="yellow-darken-4" id="send" @click="save()">Añadir</v-btn>
        </div>
        
          </v-card-text> 
  
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
// @import "../assets/scss/Variables.scss";


#form {
  width: 90%;
  margin: auto;
}

label {
  font-weight: bold;
  font-size: 1.4em;

  // .Asterisk {
  //   color: $Red;
  // }
}

h1 {
  font-family: Dosis;
  color: grey;
  font-weight: bold;
  padding: 40px;

}

.formtwo {
  display: flex;
  justify-content: space-between;

  .dateFields {
    display: flex;
    flex-wrap: wrap;
  }



}

#form {
  display: flex;
  flex-direction: column;

  .form-group {
    margin: 1% 0 1% 0;
  }
}

input {
  height: 50px;
  border: solid 2px grey;
}

#buttons-box {
  display: flex;
  align-self: end;
  margin-top: 20px;
  margin-right: 40px;
}

.check {
  display: flex;
  flex-direction: row;
  margin-left: 130px;
  margin-top: 33px;

  label {
    line-height: 50px;
  }

  .prueba {
    appearance: none;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    background-color: White;
    color: White;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
    width: 50px;
    height: 50px;
    border: 2px solid Blue;
    background-position: 0 -2rem;
    background-size: 100%;
    background-repeat: no-repeat;
    transition: all 0.3s ease-in-out;
    border-radius: 5px;
    margin-right: 10px;

    //&:checked {
      background-color: Blue;
      color: Blue;
      background-position: 0 0;
    }
  }



 .btn-add {
   margin-left: 2em;
   background-color: Green;
   width: 150px;
 }

#reset {
  background-color: Yellow;
  width: 150px;
}

@media (max-width:900px) {
  .formtwo {
    flex-direction: column;
  }

  .check {
    margin-top: 15px;
    margin-left: 0px;
  }


}
</style>
