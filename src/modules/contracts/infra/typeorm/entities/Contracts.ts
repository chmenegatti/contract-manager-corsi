import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('contracts')
class Contracts {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  company: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  cnpj: string;

  @Column()
  ie: string;

  @Column()
  object: string;

  @Column('decimal')
  value: number;

  @Column('timestamp with time zone')
  signature_date: Date;

  @Column('timestamp with time zone')
  order_date: Date;

  @Column()
  duration_days: number;

  @Column()
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Contracts;
