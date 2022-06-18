import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm'
import { IUsers } from '@interfaces/interface.users'

class DatabaseSchema {
  @PrimaryGeneratedColumn({ type: 'integer', unsigned: true })
  id!: number

  @Column({ type: 'varchar', nullable: false })
  name!: string

  @Column({ type: 'varchar', unique: true, nullable: false })
  email!: string

  @Column({ type: 'varchar', unique: true, unsigned: true, nullable: false })
  phone!: string

  @Column({ type: 'varchar', nullable: false })
  password!: string

  @Column({ type: 'boolean', nullable: true, default: true })
  active?: boolean

  @Column({ type: 'text', nullable: true, default: 'https://tinyurl.com/2luzbxpl' })
  photo?: string

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: new Date() })
  createdAt?: Date

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: new Date() })
  updatedAt?: Date

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt?: Date
}

@Entity()
export class Users extends DatabaseSchema implements IUsers {}
