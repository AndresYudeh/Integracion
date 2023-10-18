import server from "../Index";
import request from "supertest";

describe("Server", () => {
  //////////////////////////////////////USUARIOS///////////////////////////////////////////////////////////
  it("Debería obtener una respuesta exitosa al hacer una solicitud GET a /api/usuarios", async () => {
    const response = await request(server._express).get("/noveno/api/usuarios");
    expect(response.status).toBe(200); 
  });

  it("Debería crear un nuevo usuario al hacer una solicitud POST a /api/usuarios", async () => {
    const newUser = {
      USUARIO_DNI: 1355457925,
      USUARIO_EMAIL: "manuelpincay24576@gmail.com",
      USUARIO_PASSWORD: "admin2023",
      USUARIO_NOMBRE: "Manuel Pincay",
      UNIDADES_PLACA: "MBG6410",
      ROL_ID: 1
    };

    const response = await request(server._express)
      .post("/noveno/api/usuarios")
      .send(newUser);
    expect(response.status).toBe(201); 
  });

  //////////////////////////////////UNIDADES///////////////////////////////////////////////////////////////
  it("Debería obtener una respuesta exitosa al hacer una solicitud GET a /api/unidades", async () => {
    const response = await request(server._express).get("/noveno/api/unidades");
    expect(response.status).toBe(200); 
  });

  it("Debería crear un nuevo usuario al hacer una solicitud POST a /api/unidades", async () => {
    const newUnidad = {
      UNIDADES_PLACA:"MAA6457",
      UNIDADES_NUMERO:844,
      UNIDADES_COLOR:"Negro",
      UNIDADES_MATRICULA:"2124515133",
      UNIDADES_ANO:2022,
      ESTADO:true,
      ESTABLECIMIENTO_ID:2,
      USUARIO_DNI:1315908671
    };

    const response = await request(server._express)
      .post("/noveno/api/unidades")
      .send(newUnidad);
    expect(response.status).toBe(201);
  }); 
 


  ////////////////////////////////////////MANTENIMIENTOS/////////////////////////////////////////////////////////
  it("Debería obtener una respuesta exitosa al hacer una solicitud GET a /api/mantenimientos", async () => {
    const response = await request(server._express).get("/noveno/api/mantenimientos");

    expect(response.status).toBe(200); 
  });

  it("Debería crear un nuevo mantenimiento al hacer una solicitud POST a /api/mantenimientos", async () => {
    const newMantenimiento = {
      MANTENIMIENTO_ID:654,
      MANTENIMIENTO_KMAC:150000,
      MANTENIMIENTO_KMPROX:200000,
      MANTENIMIENTO_COMENTARIO:"Todo en orden hasta el último reporte",
      MANTENIMIENTO_FECHA:"2023/02/02",
      MANTENIMIENTO_IMAGEN:"imgur.com",
      MANTENIMIENTO_IMAGEN2:"imgur.com",
      ESTADO:true,
      UNIDADES_PLACA:"MAA123",
      TIPOSMANTE_ID:45
    };

    const response = await request(server._express)
      .post("/noveno/api/mantenimientos")
      .send(newMantenimiento);
    expect(response.status).toBe(201); 
  });


  /////////////////////////////////////RESPOSTAJES////////////////////////////////////////////////////////////
  it("Debería obtener una respuesta exitosa al hacer una solicitud GET a /api/repostajes", async () => {
    const response = await request(server._express).get("/noveno/api/repostajes");

    expect(response.status).toBe(201); 
  });

  it("Debería crear un nuevo repostaje al hacer una solicitud POST a /api/repostajes", async () => {
    const newRepostaje = {
      REPOSTAJE_ID: 775,
      REPOSTAJE_KMAC: 1500,
      REPOSTAJE_COMENTARIO: "Repostaje hecho volviendo del viaje",
      ESTADO: true,
      UNIDADES_PLACA: "MAAA123",
      RUTAS_ID: 2
    };


    const response = await request(server._express)
      .post("/noveno/api/repostajes")
      .send(newRepostaje);

    expect(response.status).toBe(201); 
  });

  
});
