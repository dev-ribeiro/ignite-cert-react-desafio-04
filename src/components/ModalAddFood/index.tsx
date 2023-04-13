import { FiCheckSquare } from "react-icons/fi";
import { Input } from "../Input";
import { Modal } from "../Modal";
import { Form } from "./styles";
import { FoodType } from "../../@types/food";
import { createRef } from "react";
import { FormHandles } from "@unform/core";

interface Props {
    isOpen: boolean;
    setIsOpen: () => void;
    handleAddFood: (param: FoodType) => void
}

export function ModalAddFood({ isOpen, setIsOpen, handleAddFood }: Props) {
    const formRef = createRef<FormHandles>()

    const handleSubmit = async (data:FoodType) => {

        handleAddFood(data);
        setIsOpen();
    };

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Novo Prato</h1>
                <Input name="image" placeholder="Cole o link aqui" />

                <Input name="name" placeholder="Ex: Moda Italiana" />
                <Input name="price" placeholder="Ex: 19.90" />

                <Input name="description" placeholder="Descrição" />
                <button type="submit" data-testid="add-food-button">
                    <p className="text">Adicionar Prato</p>
                    <div className="icon">
                        <FiCheckSquare size={24} />
                    </div>
                </button>
            </Form>
        </Modal>
    );
}
