import { Injectable } from '@nestjs/common';
import { BMIRequestDto, BMIResponseDto } from './app.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  calculateBMI(bmiDTO: BMIRequestDto): BMIResponseDto {
    let heightInMeters = this.getHeightInMeters(bmiDTO.HeightCm);
    let weightInKgs = bmiDTO.WeightKg;
    let bmi = weightInKgs / (heightInMeters * heightInMeters);
    return { ...this.calculateFromTable(bmi), BMI: bmi };
  }
  private getHeightInMeters(heightInCentimeters: any) {
    return parseFloat(heightInCentimeters) / 100;
  }
  private calculateFromTable(bmi: Number) {
    /**
     * BMI Category
Underweight Normal weight Overweight Moderately obese Severel obese Very severely obese
Challenge
BMI Range (kg/m2)
18.4 and below
18.5 - 24.9
25 - 29.9
30 - 34.9
35- 39.9
40 and above
Health risk
Malnutrition risk, Low risk, Enhanced risk, Medium risk, High, Very high risk

     */
    switch (true) {
      case bmi <= 18.4:
        return { BMICategory: 'Underweight', HealthRisk: 'Malnutrition risk' };
      case bmi > 18.5 && bmi <= 24.9:
        return { BMICategory: 'Normal weight', HealthRisk: 'Low risk' };
      case bmi > 25 && bmi <= 29.9:
        return { BMICategory: 'Overweight', HealthRisk: 'Enhanced risk' };
      case bmi > 30 && bmi <= 34.9:
        return { BMICategory: 'Moderately', HealthRisk: 'Medium risk' };
      case bmi > 35 && bmi <= 39.9:
        return { BMICategory: 'Severel obese', HealthRisk: 'High risk' };
      case bmi > 40:
        return {
          BMICategory: 'Very severely obese',
          HealthRisk: 'Very high risk',
        };
      default:
        return { BMICategory: '', HealthRisk: '' };
    }
  }
}
