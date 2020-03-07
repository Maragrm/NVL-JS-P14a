var pelis = [
  {
    Nombre: 'El señor de los anillos', 
    Genero: 'Acción'
  },
  {
    Nombre: 'Regreso al Futuro', 
    Genero: 'Acción'
  },
  {
    Nombre: 'Los increibles 2',
    Genero: 'Animación'
  },
  {
    Nombre: 'UP',
    Genero: 'Animación'
  },
  {
    Nombre: 'Piratas del Caribe',
    Genero: 'Acción'
  },
  {
    Nombre: 'Toy Story',
    Genero: 'Acción'
  },
  {
    Nombre: 'Origen',
    Genero: 'Acción'
  },
  {
    Nombre: 'Coco',
    Genero: 'Animación'
  },
  {
    Nombre: 'Frozen',
    Genero: 'Animación'
  },
  {
    Nombre: 'Inside Out',
    Genero: 'Animación'
  },
  {
    Nombre: 'Zootopia',
    Genero: 'Animación'
  },
  {
    Nombre: 'Los Vengadores',
    Genero: 'Acción'
  },
  {
    Nombre: 'Minions',
    Genero: 'Animación'
  },
  {
    Nombre: 'Misión Imposible',
    Genero: 'Acción'
  },
  {
    Nombre: 'Terminator',
    Genero: 'Acción'
  },
  {
    Nombre: 'Buscando a Nemo',
    Genero: 'Animación'
  },
  {
    Nombre: 'Pantera Negra',
    Genero: 'Acción'
  },
  {
    Nombre: 'The Gentlemen',
    Genero: 'Acción'
  },
  {
    Nombre: 'Cómo entrenar a tu dragón',
    Genero: 'Animación'
  }
];

//Mostrar en pantalla el genero de las películas
var caja_pelis = document.querySelector('#pelis');
var index;
for(index in pelis){ 
  var lista = document.createElement("ol");
  lista.append(pelis[index].Genero);
  caja_pelis.append(lista);
}
