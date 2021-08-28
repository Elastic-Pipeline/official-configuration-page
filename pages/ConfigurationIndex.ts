import { NextFunction, Request, Response } from "express";
import { RouteFunc } from "../../../API/Routing/Routing";
import { Page } from "../../official-generic-layout/classes/PageController";
import { ConfigurationBasePage } from "../classes/ConfigurationPage";

class ConfigurationIndex extends Page
{
    public func: RouteFunc;
    constructor()
    {
        super("<i class='fa fa-cogs' aria-hidden='true'></i> Configuration", '/configuration', "configuration/index");
        this.func = this.InternalDefaultRouteFunc;
    }

    private async InternalDefaultRouteFunc(req: Request, res: Response, next: NextFunction) : Promise<any>
    {
        res.status(200).send("SubPage Count : " + ConfigurationPage.GetSubPages().length);
    }

    public GetSubPages() : ConfigurationBasePage[]
    {
        return this.subPages as ConfigurationBasePage[];
    }

    public async RouteFunction(_req: Request, _res: Response, _next: NextFunction) : Promise<any>
    {
        ConfigurationPage.func(_req, _res, _next);
    }
}

export const ConfigurationPage = new ConfigurationIndex();