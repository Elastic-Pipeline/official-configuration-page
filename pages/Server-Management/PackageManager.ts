import { NextFunction, Request, Response } from "express";
import { ConfigurationBasePage } from "../../classes/ConfigurationPage";

export module Configuration
{
    export class PackageManager extends ConfigurationBasePage
    {
        constructor()
        {
            super("Package Manager", "packages/manage", false);
            this.SetDescription("Update/Install/Remove packages, and update or down-grade Elastic-Pipeline versions.");
        }

        public async RouteFunction(req: Request, res: Response, next: NextFunction)
        {
            return res.send("Okay!");
        }
    }
}
