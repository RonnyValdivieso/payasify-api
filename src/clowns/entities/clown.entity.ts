import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Clown {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({
		nullable: false,
		default: ''
	})
	name: string;

	@Column({
		nullable: false,
		default: 'CREATED'
	})
	status: string;

	@Column({
		type: 'timestamptz',
		nullable: false,
		default: () => 'CURRENT_TIMESTAMP'
	})
	createdAt: Date;

	@Column({
		type: 'timestamptz',
		nullable: true
	})
	deletedAt: Date;
}
