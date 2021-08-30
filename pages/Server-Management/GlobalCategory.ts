import { Page } from "../../../official-generic-layout/classes/PageController";

export module Configuration
{
    // This is a category page, we don't actually create a routing method through here.
    // But we diffently use this as data.
    export class GlobalCategory extends Page
    {
        constructor()
        {
            super("Global", 'global', 'global', true, false);
        }
    }
}

export const GlobalCategory = new Configuration.GlobalCategory();