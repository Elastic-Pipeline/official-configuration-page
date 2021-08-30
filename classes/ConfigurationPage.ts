import { NextFunction, Request, Response } from "express";
import { final } from "../../../API/Common/FinalDecoration";
import { FormType } from "../../../API/RenderBits/FormFactory";
import { Page } from "../../official-generic-layout/classes/PageController";
import { ConfigurationPage } from "../pages/ConfigurationIndex";

@final
export class EditableConfiguration
{
    private name: string;
    private description: string;
    private defaultValue: any;
    private formType: FormType;
    constructor(_name: string, _description: string, _defaultValue: any, _formType: FormType, _data?: any)
    {
        this.name = _name;
        this.description = _description;
        this.defaultValue = _defaultValue;
        this.formType = _formType;
    }

    public GetName()            : string    { return this.name; }
    public GetDescription()     : string    { return this.description; }
    public GetDefaultValue()    : any       { return this.defaultValue; }
    public GetFormType()        : FormType  { return this.formType; }
}

export abstract class ConfigurationBasePage extends Page
{
    private description: string = "";
    private iconImgStatic: string = "";

    private configurations: Map<string, EditableConfiguration[]>;

    constructor(_name: string, _url: string, _hide: boolean = false)
    {
        super(_name, _url, _url, true);
        this.configurations = new Map();
    }

    // Route Function is already setup for configuration setups; though this can be overridden at a child class.
    // Recommended to be consistent with the format.
    public async RouteFunction(req: Request, res: Response, next: NextFunction)
    {
        return res.send("Config Formatted page.");
    }

    protected AddConfiguration(_categoryName: string, _configuration: EditableConfiguration) : void
    {
        if (!this.configurations.has(_categoryName))
        {
            this.configurations.set(_categoryName, []);
        }
        const configs = this.configurations.get(_categoryName);
        if (configs == undefined)
            return;
        configs.push(_configuration);
    }

    public GetConfigurations() : Map<string, EditableConfiguration[]>
    {
        return this.configurations;
    }

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
