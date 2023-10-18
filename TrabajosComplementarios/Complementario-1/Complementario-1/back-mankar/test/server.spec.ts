import server from "../Index";
import request from "supertest";

describe("Server", () => {
/*   //////////////////////////////////////USUARIOS///////////////////////////////////////////////////////////
  it("Debería obtener una respuesta exitosa al hacer una solicitud GET a /api/usuarios", async () => {
    const response = await request(server._express).get("/noveno/api/usuarios");

    expect(response.status).toBe(200); // Verifica que el estado de la respuesta sea 200 OK
    // También puedes realizar más comprobaciones en la respuesta si es necesario
  });

  it("Debería crear un nuevo usuario al hacer una solicitud POST a /api/usuarios", async () => {
    const newUser = {
      USUARIO_DNI: 1313426774,
      USUARIO_EMAIL: "manuelpincay1111@gmail.com",
      USUARIO_PASSWORD: "admin2023",
      USUARIO_NOMBRE: "Manuel Pincay",
      UNIDADES_PLACA: "MBG6410",
      ROL_ID: 1
    };

    const response = await request(server._express)
      .post("/noveno/api/usuarios")
      .send(newUser);

    expect(response.status).toBe(201); // Verifica que el estado de la respuesta sea 201 Created (u otro código adecuado)
    // También puedes realizar más comprobaciones en la respuesta si es necesario
  });

  //////////////////////////////////UNIDADES///////////////////////////////////////////////////////////////
  it("Debería obtener una respuesta exitosa al hacer una solicitud GET a /api/unidades", async () => {
    const response = await request(server._express).get("/noveno/api/unidades");

    expect(response.status).toBe(200); // Verifica que el estado de la respuesta sea 200 OK
    // También puedes realizar más comprobaciones en la respuesta si es necesario
  });

  it("Debería crear un nuevo usuario al hacer una solicitud POST a /api/unidades", async () => {
    const newUnidad = {
      UNIDADES_PLACA:"MAA572",
      UNIDADES_NUMERO:123,
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

    expect(response.status).toBe(201); // Verifica que el estado de la respuesta sea 201 Created (u otro código adecuado)
    // También puedes realizar más comprobaciones en la respuesta si es necesario
  }); 
  
  LISTOS
  */


  /////////////////////////////////////////////////////////////////////////////////////////////////
  it("Debería obtener una respuesta exitosa al hacer una solicitud GET a /api/mantenimientos", async () => {
    const response = await request(server._express).get("/noveno/api/mantenimientos");

    expect(response.status).toBe(200); // Verifica que el estado de la respuesta sea 200 OK
    // También puedes realizar más comprobaciones en la respuesta si es necesario
  });

  it("Debería crear un nuevo usuario al hacer una solicitud POST a /api/mantenimientos", async () => {
    const newMantenimiento = {
      MANTENIMIENTO_ID:155,
      MANTENIMIENTO_KMAC:150000,
      MANTENIMIENTO_KMPROX:200000,
      MANTENIMIENTO_COMENTARIO:"Todo en orden hasta el último reporte",
      MANTENIMIENTO_FECHA:"13-05-2023",
      MANTENIMIENTO_IMAGEN:"imgur.com",
      MANTENIMIENTO_IMAGEN2:"imgur.com",
      ESTADO:true,
      UNIDADES_PLACA:"MAA555",
      TIPOSMANTE_ID:45
    };

    const response = await request(server._express)
      .post("/noveno/api/mantenimientos")
      .send(newMantenimiento);

    expect(response.status).toBe(201); // Verifica que el estado de la respuesta sea 201 Created (u otro código adecuado)
    // También puedes realizar más comprobaciones en la respuesta si es necesario
  });


  /////////////////////////////////////////////////////////////////////////////////////////////////
  it("Debería obtener una respuesta exitosa al hacer una solicitud GET a /api/usuarios", async () => {
    const response = await request(server._express).get("/noveno/api/usuarios");

    expect(response.status).toBe(200); // Verifica que el estado de la respuesta sea 200 OK
    // También puedes realizar más comprobaciones en la respuesta si es necesario
  });

  it("Debería crear un nuevo usuario al hacer una solicitud POST a /api/usuarios", async () => {
    const newUser = {
      USUARIO_DNI: 1313424494,
      USUARIO_EMAIL: "manuelpincay1223@gmail.com",
      USUARIO_PASSWORD: "admin2023",
      USUARIO_NOMBRE: "Manuel Pincay",
      UNIDADES_PLACA: "MBG6410",
      ROL_ID: 1
    };

    const response = await request(server._express)
      .post("/noveno/api/usuarios")
      .send(newUser);

    expect(response.status).toBe(201); // Verifica que el estado de la respuesta sea 201 Created (u otro código adecuado)
    // También puedes realizar más comprobaciones en la respuesta si es necesario
  });

});
