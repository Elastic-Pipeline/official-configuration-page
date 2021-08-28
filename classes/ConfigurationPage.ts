import { Page } from "../../official-generic-layout/classes/PageController";

export abstract class ConfigurationBasePage extends Page
{
    private description: string = "";
    private iconImgStatic: string = "";

    public SetDescription(_description: string) : void
    {
        this.description = _description;
    }
    public GetDescription() : string
    {
        return this.description;
    }
    public SetIconImgStatic(_iconImgStatic: string) : void
    {
        this.iconImgStatic = _iconImgStatic;
    }
    public GetIconImgStatic() : string
    {
        return this.iconImgStatic;
    }
}
