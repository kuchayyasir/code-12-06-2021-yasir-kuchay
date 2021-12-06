import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class BMIRequestDto {
  @IsNotEmpty()
  readonly Gender: String;
  @IsNumber()
  readonly HeightCm: number;
  @IsNumber()
  readonly WeightKg: number;
}
export class BMIResponseDto {
  @IsNotEmpty()
  @IsString()
  readonly BMICategory: string;
  @IsNotEmpty()
  @IsString()
  readonly HealthRisk: string;
  @IsNotEmpty()
  @IsNumber()
  readonly BMI: number;
}
