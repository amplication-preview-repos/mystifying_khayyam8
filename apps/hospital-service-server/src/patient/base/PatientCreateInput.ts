/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AppointmentCreateNestedManyWithoutPatientsInput } from "./AppointmentCreateNestedManyWithoutPatientsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PatientCreateInput {
  @ApiProperty({
    required: false,
    type: () => AppointmentCreateNestedManyWithoutPatientsInput,
  })
  @ValidateNested()
  @Type(() => AppointmentCreateNestedManyWithoutPatientsInput)
  @IsOptional()
  @Field(() => AppointmentCreateNestedManyWithoutPatientsInput, {
    nullable: true,
  })
  appointments?: AppointmentCreateNestedManyWithoutPatientsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;
}

export { PatientCreateInput as PatientCreateInput };
