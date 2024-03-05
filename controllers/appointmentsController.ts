
import { Request, Response } from "express";
import { Appointments } from "../src/models/Appointments";

//CREAR CITA POST
export const createAppointment = async (req: Request, res: Response) => {
    try {
        const { appointmentDate, customerName, serviceId } = req.body; // Recuperar la información del cuerpo de la solicitud

        // Validar si se proporcionaron todos los campos necesarios
        if (!appointmentDate || !customerName || !serviceId) {
            return res.status(400).json({
                success: false,
                message: "Los campos fecha, nombre y servicio son obligatorios."
            });
        }

        // Crear una nueva instancia de la clase Appointments con los datos proporcionados
        const newAppointment = await Appointments.create({
            appointmentDate: appointmentDate,
            customerName: customerName,
            service: { id: serviceId } // Se espera que serviceId sea el ID del servicio relacionado
        });

        // Guardar la nueva cita en la base de datos
        const createdAppointment = await newAppointment.save();

        // Responder con éxito y la nueva cita creada
        res.status(201).json({
            success: true,
            message: "Cita creada exitosamente.",
            data: createdAppointment,
        });
    } catch (error) {
        // Manejar errores
        res.status(500).json({
            success: false,
            message: "Error al crear la cita.",
            error: error // Usar error.message para obtener el mensaje de error específico
        });
    }
};

//FALTAN LAS RUTAS

//POST crear cita /api/appointments,createAppointment
//PUT actualizar cita /api/appointments, updateAppointment
//GET recuperar cita /api/appointments{id}, recoverAppointment
//GET ver mis propias citas /api/appointments viewAppointment
