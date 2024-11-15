export class CreateTeacherDto {
  @Column()
  @IsString()
  name: string;
  @Column()
  @IsString()
  surname: string;
  @Column()
  @IsString()
  phone: string;
  @Column()
  @IsString()
  lectures: string;
  @Column()
  @IsString()
  title: string;
  @Column()
  @IsString()
  level: string;
}
