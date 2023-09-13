import { Repostajes } from "../Interfaces";
import { Request, Response } from "express";
import { Repostaje } from "../models";

// Controlador para crear un nuevo repostaje
const CrearRepostaje = async (req: Request, res: Response) => {
  try {
    const nuevoRepostaje: Repostajes = req.body;
    const repostajeCreado: Repostajes = await Repostaje.create(nuevoRepostaje);
    res.status(201).json(repostajeCreado);
  } catch (error) {
    console.error("Error al crear un repostaje:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Controlador para obtener todos los repostajes
const BuscarRepostajes = async (req: Request, res: Response) => {
  try {
    const { Limite = 10, Desde = 0 } = req.query;
    const query = { ESTADO: true };
    const [total, datos]: [number, Repostajes[]] = await Promise.all([
      Repostaje.countDocuments(query),
      Repostaje.find(query).skip(Number(Desde)).limit(Number(Limite)),
    ]);
    res.json({
      total,
      datos,
    });
  } catch (error) {
    console.error("Error al buscar repostajes:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
const BuscarRepostajePorID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const repostajeEncontrado = await Repostaje.findOne({
      _id: id,
      ESTADO: true,
    });

    if (!repostajeEncontrado) {
      return res.status(404).json({ mensaje: "Repostaje no encontrado" });
    }
    res.json(repostajeEncontrado);
  } catch (error) {
    console.error("Error al buscar el repostaje por ID:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Controlador para actualizar un repostaje por ID
const ActualizarRepostaje = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const datosActualizados = req.body;
    const repostajeExistente = await Repostaje.findOne({ _id: id });
    if (!repostajeExistente) {
      return res.status(404).json({ mensaje: "Repostaje no encontrado" });
    }
    await Repostaje.findOneAndUpdate({ _id: id }, datosActualizados);
    res.status(200).json({ mensaje: "Repostaje actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar el repostaje:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Controlador para desactivar un repostaje por ID
const DesactivarRepostaje = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; 
    const repostajeExistente = await Repostaje.findOne({ _id: id });
    if (!repostajeExistente) {
      return res.status(404).json({ mensaje: "Repostaje no encontrado" });
    }
    await Repostaje.findOneAndUpdate({ _id: id }, { ESTADO: false });
    res.status(200).json({ mensaje: "Repostaje desactivado correctamente" });
  } catch (error) {
    console.error("Error al desactivar el repostaje:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export {
  CrearRepostaje,
  BuscarRepostajes,
  BuscarRepostajePorID,
  ActualizarRepostaje,
  DesactivarRepostaje,
};
