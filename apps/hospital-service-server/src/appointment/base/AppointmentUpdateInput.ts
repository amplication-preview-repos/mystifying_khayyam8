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
import { IsDate, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { ConsultationUpdateManyWithoutAppointmentsInput } from "./ConsultationUpdateManyWithoutAppointmentsInput";
import { DoctorWhereUniqueInput } from "../../doctor/base/DoctorWhereUniqueInput";
import { PatientWhereUniqueInput } from "../../patient/base/PatientWhereUniqueInput";
import { EnumAppointmentStatus } from "./EnumAppointmentStatus";

@InputType()
class AppointmentUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  appointmentDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => ConsultationUpdateManyWithoutAppointmentsInput,
  })
  @ValidateNested()
  @Type(() => ConsultationUpdateManyWithoutAppointmentsInput)
  @IsOptional()
  @Field(() => ConsultationUpdateManyWithoutAppointmentsInput, {
    nullable: true,
  })
  consultations?: ConsultationUpdateManyWithoutAppointmentsInput;

  @ApiProperty({
    required: false,
    type: () => DoctorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DoctorWhereUniqueInput)
  @IsOptional()
  @Field(() => DoctorWhereUniqueInput, {
    nullable: true,
  })
  doctor?: DoctorWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PatientWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PatientWhereUniqueInput)
  @IsOptional()
  @Field(() => PatientWhereUniqueInput, {
    nullable: true,
  })
  patient?: PatientWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumAppointmentStatus,
  })
  @IsEnum(EnumAppointmentStatus)
  @IsOptional()
  @Field(() => EnumAppointmentStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { AppointmentUpdateInput as AppointmentUpdateInput };
