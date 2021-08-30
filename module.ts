import { Module, ModuleManager } from "../../API/Modules/Module";
import fs from "fs";
import path from "path";
import { PageController } from "../official-generic-layout/classes/PageController";
import { ConfigurationPage } from "./pages/ConfigurationIndex";
import { GlobalCategory } from "./pages/Server-Management/GlobalCategory";
import { Configuration as Configuration1 } from "./pages/Server-Management/ServerManagement";
import { Configuration as Configuration2 } from "./pages/Server-Management/PackageManager";


class BaseModule extends Module
{
    constructor()
    {
        super("Official Configuration Page", fs.readFileSync(path.resolve(__dirname, "./version.txt")).toString("utf-8"));

        PageController.RegisterPage(ConfigurationPage);

        if (ConfigurationPage)
        {
            ConfigurationPage.AddSubPage(GlobalCategory);
            GlobalCategory.AddSubPage(new Configuration1.ServerManagement());
            GlobalCategory.AddSubPage(new Configuration2.PackageManager());
        }

    }
}

ModuleManager.RegisterModule(new BaseModule());