import { Module, ModuleManager } from "../../API/Modules/Module";
import fs from "fs";
import path from "path";
import { PageController } from "../official-generic-layout/classes/PageController";
import { ConfigurationPage } from "./pages/ConfigurationIndex";

class BaseModule extends Module
{
    constructor()
    {
        super("Official Configuration Page", fs.readFileSync(path.resolve(__dirname, "./version.txt")).toString("utf-8"));

        PageController.RegisterPage(ConfigurationPage);
    }
}

ModuleManager.RegisterModule(new BaseModule());