import ProductDto from "./ProductDto";

type RegistryDto = {
    id: string,
    status: string,
    firstName: string,
    lastName: string,
    eventType: string,
    items: ProductDto[];
}
export default RegistryDto;