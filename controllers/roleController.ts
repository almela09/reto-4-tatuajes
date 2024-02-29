//Aqui se escriben las funciones que afecten a la ENTIDAD ROLES.

import { Request, Response } from "express";
//funcion para recuperar los roles. Tener en cuenta al exportar que es EXPRESS y no la primera que sale.
export const getRoles = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Roles retrieved succesfully",
  });
};

//el 201 es un created
export const createRole = (req: Request, res: Response) =>{
    res.status(201).json({
        success: true,
        message: "Roles created"
      });

}

export const updateRole = (req: Request, res: Response) =>{
    res.status(200).json({
        success: true,
        message: "Roles updated"
      });
}

export const deleteRole = (req: Request, res: Response) =>{
    res.status(200).json({
        success: true,
        message: "Roles delete"
      });

}
