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
import { LabRequestWhereInput } from "./LabRequestWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LabRequestListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LabRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => LabRequestWhereInput)
  @IsOptional()
  @Field(() => LabRequestWhereInput, {
    nullable: true,
  })
  every?: LabRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => LabRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => LabRequestWhereInput)
  @IsOptional()
  @Field(() => LabRequestWhereInput, {
    nullable: true,
  })
  some?: LabRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => LabRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => LabRequestWhereInput)
  @IsOptional()
  @Field(() => LabRequestWhereInput, {
    nullable: true,
  })
  none?: LabRequestWhereInput;
}
export { LabRequestListRelationFilter as LabRequestListRelationFilter };