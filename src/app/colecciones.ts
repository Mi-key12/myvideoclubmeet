export interface Curriculum {
    id: number;
    fecha: string;
    descripcion: string;
}

export interface Pelicula {
    id: number;
    titulo: string;
    director: string;
    anio: number;
    imgpath: string;
}

export const curriculum = [
    {
        id: 1,
        fecha: '2021-actualidad',
        descripcion: 'Cursando ingenieria en desarrollo de software multiplataforma - UTCJ'
    },
    {
        id: 2,
        fecha: '2020-actualidad',
        descripcion: 'CEO startup y programador principal - Blink Code'
    },
    {
        id: 3,
        fecha: '2020-2020',
        descripcion: 'Desarrollo y despliegue de aplicación UTCJournal, (Programador Líder)'
    },
    {
        id: 4,
        fecha: '2020-2020',
        descripcion: 'Desarrollo y despliegue de aplicación ThinkerBell, (Programador Secundario - QA Tester)'
    },
    {
        id: 5,
        fecha: '2019-2019',
        descripcion: 'Desarrollo y despliegue de aplicación TeenMath, (Programador Secundario - Administrador de Base de datos)'
    }
];

export const peliculas = [
    {
        id: 1,
        titulo: 'Lucy',
        director: 'Luc Besson',
        anio: 2014,
        imgpath: '../assets/imgs/lucy-movie.jpg'
    },
    {
        id: 2,
        titulo: 'Los ilusionistas',
        director: 'Louis Leterrier',
        anio: 2013,
        imgpath: '../assets/imgs/ilusionistas-movie.jpg'
    },
    {
        id: 3,
        titulo: 'Música, Amigos y Fiesta',
        director: 'Max Joseph',
        anio: 2015,
        imgpath: '../assets/imgs/musica-amigos-fiesta-movie.jpg'
    },
    {
        id: 4,
        titulo: 'Proyecto X',
        director: 'Nima Nourizadeh',
        anio: 2012,
        imgpath: '../assets/imgs/proyecto-x-movie.jpg'
    },
    {
        id: 5,
        titulo: 'Super cool',
        director: 'Greg Mottola',
        anio: 2007,
        imgpath: '../assets/imgs/super-cool-movie.jpg'
    },
    {
        id: 6,
        titulo: '¿Qué pasó ayer?',
        director: 'Todd Phillips',
        anio: 2009,
        imgpath: '../assets/imgs/que-paso-ayer-movie.jpg'
    },
    {
        id: 7,
        titulo: 'Bienvenidos a Zombieland',
        director: 'Ruben Fleischer',
        anio: 2009,
        imgpath: '../assets/imgs/zombieland-movie.jpg'
    },
    {
        id: 8,
        titulo: 'Red social',
        director: 'David Fincher',
        anio: 2010,
        imgpath: '../assets/imgs/red-social-movie.jpg'
    },
    {
        id: 9,
        titulo: 'Operación Ultra',
        director: 'Nima Nourizadeh',
        anio: 2015,
        imgpath: '../assets/imgs/operacion-ultra-movie.jpg'
    }
];
