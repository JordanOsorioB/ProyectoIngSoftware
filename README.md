Para poder ejecutar las vistas, debes instalar python
ejecutar python -m http.server 8080
luego de esto ingresando por la siguiente ruta podras acceder a tu menú
http://localhost:8080/
desde aqui tendrás acceso a todos los archivos haciendo uso de java script


Las vistas principales son las que conformar el menú principal, cada menú que tenga
submenus, tienen su carpeta propia donde la pagina principal que se abre es un nuevo index,
desde el index te deriva a las distintas paginas.

Para el caso de la carpeta usuarioLog, estamos intentando simplificar el uso de menus y footer, con el uso de 
java script, lo que ahora en vez de escribir en cada pagina el menu y el footer, simplemente hay que invocar function.js 
y el menú aparecerá, asi cualquier cambio en el menú solo debemos hacerlo a 1 documento y no a todos, 
además de que usuarioLog son los usuaro que ya estarán logueados, los que tendrán un menú personal diferente
y vistas nuevas que no son las mismas que visualiza alguien que no está logueado en la pagina.

Todas las imagenes, logos y demaces estarán en el contenedor, y cuando se incorporen los controladores
deberá crearse una carpeta llamada Controller que contenga esta logica, y dependiendo de qué logica meneja, 
de qué pagina, será el nombre del controlador, ejemplo:

sobreNosotrosController.py

sería el nombre del documento creado en python que tenga lo logica que una la vista con la base de datos.

Esto está basado en el formato MVC, de modelo-vista-controlador.
