class Paciente {
    constructor(nombre, fechaNacimiento, direccion, departamento, municipio, tipoDocumento, numeroDocumento, telefono, motivoConsulta) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.direccion = direccion;
        this.departamento = departamento;
        this.municipio = municipio;
        this.tipoDocumento = tipoDocumento;
        this.numeroDocumento = numeroDocumento;
        this.telefono = telefono;
        this.motivoConsulta = motivoConsulta;
    }
}

const departamentosMunicipios = {

    "Ahuachapán": [ "Ahuachapán", "Apaneca", "Atiquizaya", "Concepción de Ataco", "El Refugio", "Guaymango", "Jujutla", "San Francisco Menéndez", "San Lorenzo", 
        "San Pedro Puxtla", "Tacuba", "Turín" ],

    "Santa Ana": ["Santa Ana", "Candelaria de la Frontera", "Chalchuapa", "Coatepeque", "El Congo", "El Porvenir", "Masahuat", "Metapán", "San Antonio Pajonal", 
        "San Sebastián Salitrillo", "Santa Rosa Guachipilín", "Santiago de la Frontera", "Texistepeque" ],

    "Sonsonate": [ "Sonsonate", "Acajutla", "Armenia", "Caluco", "Cuisnahuat", "Izalco", "Juayúa", "Nahuizalco", "Nahulingo", "Salcoatitán", "San Antonio del Monte", 
        "San Julián", "Santa Catarina Masahuat", "Santa Isabel Ishuatán", "Santo Domingo de Guzmán", "Sonzacate" ],

    "Chalatenango": [ "Chalatenango", "Agua Caliente", "Arcatao", "Azacualpa", "Citalá", "Comalapa", "Concepción Quezaltepeque", "Dulce Nombre de María", "El Carrizal", 
        "El Paraíso", "La Laguna", "La Palma", "La Reina", "Las Vueltas", "Nombre de Jesús", "Nueva Concepción", "Nueva Trinidad", "Ojos de Agua", "Potonico", 
        "San Antonio de la Cruz", "San Antonio Los Ranchos", "San Fernando", "San Francisco Lempa", "San Francisco Morazán", "San Ignacio", "San Isidro Labrador", 
        "San José Cancasque", "San José Las Flores", "San Luis del Carmen", "San Miguel de Mercedes", "San Rafael", "Santa Rita", "Tejutla", "Tenancingo" ],

    "La Libertad": [ "Santa Tecla", "Antiguo Cuscatlán", "Chiltiupán", "Ciudad Arce", "Colón", "Comasagua", "Huizúcar", "Jayaque", "Jicalapa", "La Libertad", 
        "Nuevo Cuscatlán", "Opico", "Quezaltepeque", "Sacacoyo", "San José Villanueva", "San Matías", "San Pablo Tacachico", "Talnique", "Tamanique", "Teotepeque", 
        "Tepecoyo", "Zaragoza" ],

    "San Salvador": [ "San Salvador", "Aguilares", "Apopa", "Ayutuxtepeque", "Cuscatancingo", "Delgado", "El Paisnal", "Guazapa", "Ilopango", "Mejicanos", "Nejapa", 
        "Panchimalco", "Rosario de Mora", "San Marcos", "San Martín", "Santiago Texacuangos", "Santo Tomás", "Soyapango", "Tonacatepeque" ],

    "Cuscatlán": [ "Cojutepeque", "Candelaria", "El Carmen", "El Rosario", "Monte San Juan", "Oratorio de Concepción", "San Bartolomé Perulapía", "San Cristóbal", 
        "San José Guayabal", "San Pedro Perulapán", "San Rafael Cedros", "San Ramón", "Santa Cruz Analquito", "Santa Cruz Michapa", "Suchitoto", "Tenancingo" ],
    
    "La Paz": [ "Zacatecoluca", "Cuyultitán", "El Rosario", "Jerusalén", "Mercedes La Ceiba", "Olocuilta", "Paraíso de Osorio", "San Antonio Masahuat", "San Emigdio", 
        "San Francisco Chinameca", "San Juan Nonualco", "San Juan Talpa", "San Juan Tepezontes", "San Luis La Herradura", "San Luis Talpa", "San Miguel Tepezontes", 
        "San Pedro Masahuat", "San Pedro Nonualco", "San Rafael Obrajuelo", "Santa María Ostuma", "Santiago Nonualco", "Tapalhuaca" ],

    "Cabañas": [ "Sensuntepeque", "Cinquera", "Dolores", "Guacotecti", "Ilobasco", "Jutiapa", "San Isidro", "Tejutepeque", "Victoria", "San Sebastián", "Guadalupe"],

    "San Vicente": [ "San Vicente", "Apastepeque", "Guadalupe", "San Cayetano Istepeque", "San Esteban Catarina", "San Ildefonso", "San Lorenzo", "San Sebastián", 
        "Santa Clara", "Santo Domingo", "Tecoluca", "Tepetitán", "Verapaz" ],

    "Usulután": [ "Usulután", "Alegría", "Berlín", "California", "Concepción Batres", "El Triunfo", "Ereguayquín", "Estanzuelas", "Jiquilisco", "Jucuapa", "Jucuarán", 
        "Mercedes Umaña", "Nueva Granada", "Ozatlán", "Puerto El Triunfo", "San Agustín", "San Buenaventura", "San Dionisio", "San Francisco Javier", "Santa Elena", 
        "Santa María", "Santiago de María", "Tecapán" ],

    "San Miguel": [ "San Miguel", "Carolina", "Chapeltique", "Chinameca", "Chirilagua", "Ciudad Barrios", "Comacarán", "El Tránsito", "Lolotique", "Moncagua", 
        "Nueva Guadalupe", "Nuevo Edén de San Juan", "Quelepa", "San Antonio", "San Gerardo", "San Jorge", "San Luis de la Reina", "San Rafael Oriente", "Sesori", 
        "Uluazapa" ],

    "Morazán":[ "San Francisco Gotera", "Arambala", "Cacaopera", "Chilanga", "Corinto", "Delicias de Concepción", "El Divisadero", "El Rosario", "Gualococti", 
        "Guatajiagua", "Joateca", "Jocoaitique", "Jocoro", "Lolotiquillo", "Meanguera", "Osicala", "Perquín", "San Carlos", "San Fernando", "San Isidro", "San Simón",
        "Sensembra", "Sociedad", "Torola", "Yamabal", "Yoloaiquín" ],
    
    "La Unión": [ "La Unión", "Anamorós", "Bolívar", "Concepción de Oriente", "Conchagua", "El Carmen", "El Sauce", "Intipucá", "Lislique", "Meanguera del Golfo", 
        "Nueva Esparta", "Pasaquina", "Polorós", "San Alejo", "San José", "Santa Rosa de Lima", "Yayantique", "Yucuaiquín" ]
};

function actualizarMunicipios() {
    const departamentoSeleccionado = document.getElementById('departamento').value;
    const municipios = departamentosMunicipios[departamentoSeleccionado];
    const selectMunicipio = document.getElementById('Municipio');

    selectMunicipio.innerHTML = '';

    municipios.forEach(municipio => {
        const option = document.createElement('option');
        option.value = municipio;
        option.textContent = municipio;
        selectMunicipio.appendChild(option);
    });
}

window.onload = actualizarMunicipios;

function Validacion() {
    const nombrePaciente = document.getElementById('NombrePaciente').value;
    const direccion = document.getElementById('Direccion').value;
    const motivoConsulta = document.getElementById('Motivo').value;
    const FechaNac = document.getElementById('FechaNac').value;
    const Telefono = document.getElementById('Telefono').value;
    const NumDocumento = document.getElementById('NumDocumento').value;
    const TipoDocumento = document.getElementById('TipoDocumento').value;

    if (!isNaN(nombrePaciente) || nombrePaciente.trim() === "") {
        alert("Debe ingresar un nombre válido para el paciente");
        return;
    }

    const FechaNacRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;
    if (!FechaNacRegex.test(FechaNac)) {
        alert('Ingrese una Fecha valida(dd/mm/aaaa)');
        return false;
    }

    if (direccion.trim() === "") {
        alert("Ingrese una dirección válida")
        return;
    }

    if (TipoDocumento === "DUI") {
        const duiRegex = /^\d{8}-\d{1}$/;
        if (!duiRegex.test(NumDocumento)) {
            alert('Por favor, ingrese un DUI válido con el formato 12345678-9.');
            return false;
        }
    } else {
        const PasaporteRegex = /^\d{9}$/;
        if (!PasaporteRegex.test(NumDocumento)) {
            alert('Por favor, ingrese un número de pasaporte válido de 9 dígitos.');
            return false;
        }
    }

    const TelefonoRegex = /^\d{8}$/;
    if (!TelefonoRegex.test(Telefono)) {
        alert('Por favor, ingrese un número de teléfono válido de 8 dígitos.');
        return false;
    }

    if (motivoConsulta.trim() === "") {
        alert("Ingrese algun motivo")
        return;
    }

    return true;
}

function GuardarPaciente() {
    if (Validacion()) {
        const paciente = new Paciente(
            document.getElementById('NombrePaciente').value,
            document.getElementById('FechaNac').value,
            document.getElementById('Direccion').value,
            document.getElementById('departamento').value,
            document.getElementById('Municipio').value,
            document.getElementById('TipoDocumento').value,
            document.getElementById('NumDocumento').value,
            document.getElementById('Telefono').value,
            document.getElementById('Motivo').value
        );

        localStorage.setItem(paciente.numeroDocumento, JSON.stringify(paciente));

        alert('Paciente registrado exitosamente!');
        document.Pacientes.reset();

        window.location.href = "visualizacion.html";
    }
}

function cargarPacienteParaEditar(clave) {
    const paciente = JSON.parse(localStorage.getItem(clave));

    if (!paciente) {
        console.error("No se encontró el paciente con la clave:", clave);
        return;
    }

    console.log("Cargando paciente para editar:", paciente);

    document.getElementById('NombrePaciente').value = paciente.nombre;
    document.getElementById('FechaNac').value = paciente.fechaNacimiento;
    document.getElementById('Direccion').value = paciente.direccion;
    document.getElementById('departamento').value = paciente.departamento;
    actualizarMunicipios();
    document.getElementById('Municipio').value = paciente.municipio;
    document.getElementById('TipoDocumento').value = paciente.tipoDocumento;
    document.getElementById('NumDocumento').value = paciente.numeroDocumento;
    document.getElementById('Telefono').value = paciente.telefono;
    document.getElementById('Motivo').value = paciente.motivoConsulta;

    const btnActualizar = document.createElement('button');
    btnActualizar.type = 'button';
    btnActualizar.className = 'btn btn-success';
    btnActualizar.textContent = 'Actualizar';

    btnActualizar.onclick = function () {
        if (Validacion()) {
            const pacienteActualizado = new Paciente(
                document.getElementById('NombrePaciente').value,
                document.getElementById('FechaNac').value,
                document.getElementById('Direccion').value,
                document.getElementById('departamento').value,
                document.getElementById('Municipio').value,
                document.getElementById('TipoDocumento').value,
                document.getElementById('NumDocumento').value,
                document.getElementById('Telefono').value,
                document.getElementById('Motivo').value
            );


            localStorage.setItem(clave, JSON.stringify(pacienteActualizado));
            alert('Paciente actualizado exitosamente!');
            window.location.href = "visualizacion.html";
        }
    };

    document.Pacientes.appendChild(btnActualizar);
}

window.onload = function () {
    actualizarMunicipios();

    const params = new URLSearchParams(window.location.search);
    if (params.has('editar')) {
        cargarPacienteParaEditar(params.get('editar'));
        document.getElementById('btnRegistrar').style.display = 'none';
    }
}
