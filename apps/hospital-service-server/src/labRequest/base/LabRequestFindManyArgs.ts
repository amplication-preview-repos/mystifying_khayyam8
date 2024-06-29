/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LabRequestWhereInput } from "./LabRequestWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LabRequestOrderByInput } from "./LabRequestOrderByInput";

@ArgsType()
class LabRequestFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LabRequestWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LabRequestWhereInput, { nullable: true })
  @Type(() => LabRequestWhereInput)
  where?: LabRequestWhereInput;

  @ApiProperty({
    required: false,
    type: [LabRequestOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LabRequestOrderByInput], { nullable: true })
  @Type(() => LabRequestOrderByInput)
  orderBy?: Array<LabRequestOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { LabRequestFindManyArgs as LabRequestFindManyArgs };