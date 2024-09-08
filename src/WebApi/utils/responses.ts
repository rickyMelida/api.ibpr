import { Response } from "express";

const ApiResponse = {
  OK: (res: Response, data = { message: "OK" }) => {
    return res.status(200).send(data);
  },

  Created: (res: Response, dataCreated: Date) => {
    return res.status(201).send(dataCreated);
  },

  NotContent: (res: Response, message = "Not Content") => {
    return res.status(204).send({ message });
  },

  BadRequest: (res: Response, message = "Bad Request") => {
    return res.status(400).send({ message });
  },

  Unauthorized: (res: Response, message = "User Unauthorized") => {
    return res.status(401).send({ message });
  },

  Forbidden: (res: Response, message = "Forbidden") => {
    return res.status(403).send({ message });
  },

  NotFound: (res: Response, message = "Page Not Found") => {
    return res.status(404).send({ message });
  },

  InternalServerError: (res: Response, message = "Internal Server Error") => {
    return res.status(500).send({ message });
  },
};

export default ApiResponse;
