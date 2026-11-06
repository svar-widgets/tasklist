export type TID = string | number;

export interface ITask {
	id?: TID;
	content: string;
	status?: number;
}

export interface IChange {
	action: "add" | "update" | "delete";
	id?: TID;
	task?: ITask;
	value: ITask[];
	originalValue: TID | ITask[] | Promise<ITask[]>;
}

// onchange can return fields to merge into the added task
// (e.g. the id assigned by a backend), or a promise of them
export type TChangeResult = void | Partial<ITask> | Promise<unknown>;
