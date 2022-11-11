import instance from "./axios.config";

const list = async () => {
	return await instance.get("/topics");
};
const read = async (id: string) => {
	return await instance.get(`/topics/${id}`);
};
const create = async (payload: any) => {
	return await instance.post("/topics", payload);
};
const update = async (id: string, payload: any) => {
	return await instance.patch(`/topics/${id}`, payload);
};
const remove = async (id: string) => {
	return await instance.get(`/topics/${id}`);
};

export { list, read, create, update, remove };
