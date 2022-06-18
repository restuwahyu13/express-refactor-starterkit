import { Column, Entity, PrimaryGeneratedColumn, DeleteDateColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { IPromotions } from '@interfaces/interface.promotions'

@Entity()
export class Promotions implements IPromotions {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id!: number

  @Column({ type: 'varchar', unique: true, nullable: false })
  code!: string

  @Column({ type: 'varchar', unsigned: true, nullable: false })
  price!: number

  @Column({ type: 'varchar', nullable: false })
  usage!: boolean

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: new Date() })
  createdAt?: Date

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: new Date() })
  updatedAt?: Date

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt?: Date
}
