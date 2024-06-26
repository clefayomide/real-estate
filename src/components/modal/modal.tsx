"use client";

import React from "react";
import {
	Modal as NextModal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from "@nextui-org/react";

type ModalProps = {
	header: string;
	modalBody: React.ReactNode;
	modalFooter?: React.ReactNode;
	placement?:
		| "center"
		| "auto"
		| "top"
		| "top-center"
		| "bottom"
		| "bottom-center"
		| undefined;
	isOpen: boolean;
	close: () => void;
};

const Modal = (props: ModalProps) => {
	const { onOpenChange } = useDisclosure();
	const {
		header,
		modalBody,
		modalFooter,
		placement = "center",
		isOpen,
		close,
	} = props;

	return (
		<NextModal
			isDismissable={false}
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			placement={placement}
			onClose={close}
		>
			<ModalContent>
				{() => (
					<>
						<ModalHeader className="flex flex-col gap-1">{header}</ModalHeader>
						<ModalBody>{modalBody}</ModalBody>
						<ModalFooter>{modalFooter}</ModalFooter>
					</>
				)}
			</ModalContent>
		</NextModal>
	);
};

export default Modal;
