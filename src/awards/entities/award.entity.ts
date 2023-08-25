import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Award {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({
		nullable: false,
		default: ''
	})
	name: string;

	@Column({
		nullable: true,
		default: ''
	})
	description: string;

	@Column({
		type: 'timestamptz',
		nullable: false,
		default: () => 'CURRENT_TIMESTAMP'
	})
	eventDate: Date;

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
