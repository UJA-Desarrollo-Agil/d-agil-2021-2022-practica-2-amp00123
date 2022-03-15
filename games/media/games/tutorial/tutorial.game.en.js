// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Biblioteca de la Universidad</h1>\
        <img src='media/games/tutorial/biblioteca.jpg' width='450' height='225' class='float_right'>\
        <p>Albertillo sale de casa y tras un largo día de clases, procede a ir a la biblioteca de la universidad ya que, en su piso, sus compañeros estan todo el día jugando al fifa y no lo dejan estudiar.\
        Como se nota que no estudian ingeniería informática\
        .</p>\
        \
        <p>Una vez Albertillo llega a la biblioteca, decide sentarse en una esquina al fondo de la sala, para que sea difícil que lo vean sus amigos y lo molesten, no puede perder ni un minuto, tiene demasiadas cosas por hacer y entregar.</p>\
        \
		<p>Tras largas horas de estudio, Albertillo ha terminado casi todas las tareas pero, todavía le quedan las mas difíciles así que, decide darse un descanso o mejor, darse una cabezadita de 5 minutillos.\
        .</p>\
		<p>'Total...si estoy en una esquina, ¡Nadie verá que estoy durmiendo!'\
        .</p>\
		<p>Al final de todo esa 'pequeña cabezada' se convirtió en una cabezada de poco mas de 5 horitas. Albertillo se despierta confuso y un poco atontado viendo que, las luces están apagadas y no hay nadie en la biblioteca, dandose cuenta de que\
		la cabezada ha sido un poco más que un sueñecito. Tras esto, Albertillo piensa en 2 opciones\
        .</p>\
		<p class='transient'><a href='dormir'> Seguir durmiendo</a> hasta que sea de día y abran de nuevo la biblioteca y salir como si nada hubiera pasado \
		o escapar por una <a href='ventana'>ventana que está abierta al lado de su mesa.</a> \
        \
		",
		{
			exit: function(character, system, to) {
                system.animateQuality("Sueño", character.qualities.sueño-10);
            }
		}
    ),

    
    situations: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
        },
        tags: ["topic"],
        optionText: "What Undum Games are Made Of",
        displayOrder: 1
    }),
	"dormir": new undum.SimpleSituation(
        "<img src='media/games/tutorial/sueño.jpg' width='300' height='225' class='float_right'>\
		<p>Albertillo sigue durmiendo sin ningún tipo de problema pero, unos pasos lo despierta.\
		Los pasos se tratan de un vigilante de seguridad que esta haciendo guardia por la biblioteca por lo que,\
		Albertillo con temor a que lo pillen y le puedan expulsar de la universidad decide <a href='esconder'> esconderse</a>  y seguir durmiendo detrás de una estantería.\
		\
		\
		\
		 </p>",
		 {
            heading: "Sigue durmiendo zZzZzZz...",
            diplayOrder: 1,
            tags: ["topic"]
        }
),
"esconder": new undum.SimpleSituation(
		
        "<img src='media/games/tutorial/esconder2.jpg'  width='400' height='250' class='float_right'>\
		<p>\
		zZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZz\
		ZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZzZ\
		<a href='reloj'> (ADELANTAR RELOJ HASTA LAS 9:00 AM...).</a>\
		 </p>",
		 {
            heading: "QUE NOS PILLAN LOCOO!!",
            diplayOrder: 1,
            tags: ["topic"],
			actions: {
                "reloj": function(character, system, action) {
                    system.setQuality("stamina", character.qualities.stamina+10);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("sueño", character.qualities.sueño+10);
            }
        }
),

"ventana": new undum.SimpleSituation(
        "<img src='media/games/tutorial/ventana.jpg' width='450' height='225' class='float_right'>\
		<p>Logras salir por la ventana y caes a la puerta principal de la biblioteca. ¿Qué suerte no?.\
		Te dispones a dirigirte a la puerta principal de la universidad para poder salir pero, de repente.....\
		Te percatas de una figura que se dirige hacia a tí\
		 <a href='acercarse'> (acercarse a la figura).</a>\
		 </p>",
		 {
            heading: "Qui..én se..rá...?",
            diplayOrder: 1,
            tags: ["topic"],
			actions: {
                "acercarse": function(character, system, action) {
                    system.setQuality("stamina", character.qualities.stamina+10);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("sueño", character.qualities.sueño+10);
            }
        }
),
"reloj": new undum.SimpleSituation(
		"<img src='media/games/tutorial/policia.jpg'  width='400' height='250' class='float_right'>\
        <p>Se hace de día y Albertillo se despierta como si nada hubiera ocurrido.\
		Se abren las puertas de la biblioteca y, se espera 10 minutos a que empiecen a entrar gente para poder salir de forma disimulada.\
		Albertillo sale disimuladamente pero, se da cuenta de que está la policía...\
		La única forma es pasando por su lado.\
		Al pasar por su lado, escucha que, los sensores de movimiento han saltado varias veces durante la madrugada.\
		Albertillo corre como nunca hasta llegar a su piso, antes de que lo descubran.  <a href='abrir'> (ABRIR PISO) <.\
		 </p>",
		 {
            heading: "9:00 AM",
            diplayOrder: 1,
            tags: ["topic"]
			
        }
),
"acercarse": new undum.SimpleSituation(
		"<img src='media/games/tutorial/abeliano.jpg'  width='350' height='200' class='float_right'>\
        <p> Al ir acercandote te das cuenta de que te resulta algo... familiar....     QUEEE!!!!\
		PERO SI ES CARMEN ORDOÑEZ!!!! QUÉ HACES AQUÍ.\
		Carmen: 'Exacto alumno, por las noches me encargo de vigilar las instalaciones de la universidad...y tú ¿Qué haces por aquí?.\
		\
		Albertillo:<a href='contar'> (Contar situación).</a> \
		 </p>",
		 {
            heading: "Pero....si es...!",
            diplayOrder: 1,
            tags: ["topic"],
			actions: {
                "contar": function(character, system, action) {
                    system.setQuality("stamina", character.qualities.stamina+10);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("sueño", character.qualities.sueño+10);
            }
        }
),
"contar": new undum.SimpleSituation(
        "<p> Carmen: 'Entiendo alumno.... Bueno creo que te puedo dejar salir pero solo si me dices la definición de 'grupo abeliano' ':\
		<a href='abeliano'>Contestar: es un grupo en el cual la operación interna satisface la propiedad conmutativa, esto es, que el resultado de la operación es independiente del orden de los argumentos..</a> ó <a href='nocontar'> no tengo ni papa de eso .</a>  \ </p>",
		 
		 {
            heading: "",
            diplayOrder: 1,
            tags: ["topic"],
			actions: {
                "abeliano": function(character, system, action) {
                    system.setQuality("stamina", character.qualities.stamina+10);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("stamina", character.qualities.stamina+50);
            },
			actions: {
                "nocontar": function(character, system, action) {
                    system.setQuality("stamina", character.qualities.stamina+10);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("stamina", character.qualities.stamina+50);
            }
		}
        
),
"abeliano": new undum.SimpleSituation(
        "<p>Carmen: 'Bien alumno! se ve que ha estudiado. Te dejaré pasar...haré como que no he visto nada'.\
		 Albertillo se dispone a continuar su camino hasta la puerta de la universidad para poder salir. <a href='seguir'> (CAMINAR).</a></p>",
		 {
            heading: "Menos mal que he estudiado jeje",
            diplayOrder: 1,
            tags: ["topic"],
			actions: {
                "seguir": function(character, system, action) {
                    system.setQuality("stamina", character.qualities.stamina+10);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("sueño", character.qualities.sueño+10);
            }
        
        }
),
"nocontar": new undum.SimpleSituation(
		"<img src='media/games/tutorial/bomba.jpg'  width='400' height='200' class='float_center'>\
        <p>Carmen enfurece tanto que decide llevarte personalmente a tu casa y ponerte a estudiar álgebra hasta no completar todas las actividades FIN.\
		</p>",
		 {
            heading: "Salgo de una y me meto en otra...",
            diplayOrder: 1,
            tags: ["topic"]
        }
),

"seguir": new undum.SimpleSituation(
        "<p>Tras caminar durante 10 minutos, Albertillo llega a la puerta pero...\
		Albertillo: 'NO PUEDE SER..........!!!!!!!!!!!...'\
		Se encuentra con 2 de sus profesores en la puerta (parece ser que en sus ratos libres son guardas de seguridad).\
		(Esos profesores son Balsas y Víctor Rivas).\
		Albertillo piensa en 2 opciones: <a href='salto'> Saltar por uno de los muros aunque la caída sea grande.</a> ó <a href='charlar'> hablar con ellos para ver si lo dejan salir.</a> \
		 </p>",
		 {
		actions: {
                "charlar": function(character, system, action) {
                    system.setQuality("stamina", character.qualities.stamina);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("stamina", character.qualities.stamina+10);
            }
		}
        
),    

"salto": new undum.SimpleSituation(
		"<img src='media/games/tutorial/caer.jpg'  width='425' height='250' class='float_center'>\
        <p>Albertillo pasa disimuladamente por su lado sin que se den cuenta pero, al saltar tiene la mala suerte de que se cae y, termina en urgencias con un par de puntos en la cabeza.\
		FIN.\
		 </p>",
		 {
            heading: "AY!",
            diplayOrder: 1,
            tags: ["topic"]
        }
),   

"charlar": new undum.SimpleSituation(
        "<p>Profes: EY QUE HACES AQUÍ!.\
		Albertillo les cuenta la situación que le ha sucedido. Éstos se encuentran sorprendidos al ver que nadie de la biblioteca se ha dado cuenta de que estaba ahí.\
		Al igual que le sucedió con Carmen, Víctor y Balsas, le proponen un ejercicio a resolver para que le dejen pasar.  \
		Víctor y Balsas: 'Ey Alberto, te dejaremos pasar solo si nos programas un ejercicio basado en el cálculo de números primos'.  \
		 <a href='hacer'>  Albertillo: 'De acuerdo, lo haré'.</a> ó <a href='salto'> correr de ellos y saltar por el muro.</a> \
		 </p>",
		 {
            heading: "¿Que querrán estos 2?",
            diplayOrder: 1,
            tags: ["topic"]
        }
),

"hacer": new undum.SimpleSituation(
        "<img src='media/games/tutorial/primos.jpg'  width='425' height='250' class='float_center'>\
		<p>Profes: PERFECTO!!!.\
		Albertillo al fin, es libre de la Universidad y puede llegar a su piso tranquilamente.\
		 <a href='abrir'> (ABRIR PISO) </a> \
		 </p>",
		 {
            heading: "UFF MENOS MAL",
            diplayOrder: 1,
            tags: ["topic"],
			actions: {
                "abeliano": function(character, system, action) {
                    system.setQuality("stamina", character.qualities.stamina+10);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("stamina", character.qualities.stamina+500);
            
		 }}
		 
),

"abrir": new undum.SimpleSituation(
        "<img src='media/games/tutorial/llaves.jpg'  width='425' height='250' class='float_center'>\
		<p>FIN.\
		 </p>",
		 {
            heading: "FIN.",
            diplayOrder: 1,
            tags: ["topic"]
			
        }
)


};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";      

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    sueño: new undum.IntegerQuality(
        "Sueño", {priority:"0001", group:'stats'}
    ),
    stamina: new undum.NumericQuality(
        "Stamina", {priority:"0002", group:'stats'}
    )

   
    
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.sueño = 50;
    character.qualities.stamina = 50;
    
    system.setCharacterText("<p>Busca una salida.</p>");
};


