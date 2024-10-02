import { IsString, IsInt, IsEmail, validate } from "class-validator";

class ActivityDetails {
    @IsInt()
    Id: number;

    @IsString()
    Name: string;

    @IsString()
    Description: string;

    @IsString()
    DateActivity: string;
    
    @IsString()
    Site: string;
    
    @IsString()
    Direction: string;
    
    @IsString()
    ImageName: string;
    
    @IsString()
    Image: string;

    constructor(
        Id: number,
        Name: string,
        Description: string,
        DateActivity: string,
        Site: string,
        Direction: string,
        ImageName: string,
        Image: string
    ) {
        this.Id = Id;
        this.Name = Name;
        this.Description = Description;
        this.DateActivity = DateActivity;
        this.Site = Site;
        this.Direction = Direction;
        this.ImageName = ImageName;
        this.Image = Image;
    }

    /*constructor(
    public Name: string,
    public Description: string,
    public DateActivity: string,
    public Site: string,
    public Direction: string,
    public ImageName: string,
    public Image: string
  ) {}*/
}

export default ActivityDetails;
