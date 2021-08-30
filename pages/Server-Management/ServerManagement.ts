import { NextFunction, Request, Response } from "express";
import { ConfigurationBasePage } from "../../classes/ConfigurationPage";

export module Configuration
{
    export class ServerManagement extends ConfigurationBasePage
    {
        constructor()
        {
            super("Server Configuration", "server/manage", false);
            this.SetDescription("Configure how the server operates.");
        }

        public async RouteFunction(req: Request, res: Response, next: NextFunction)
        {
            return res.send("Okay!");
        }
    }
}
