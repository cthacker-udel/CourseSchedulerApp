import React from "react";
import { Modal } from "react-bootstrap";
import type { ForgotTokenType } from "src/@types";

import { TokenEmailRedeemModal } from "./TokenEmailRedeemModal/TokenEmailRedeemModal";
import { TokenPasswordRedeemModal } from "./TokenPasswordRedeemModal/TokenPasswordRedeemModal";
import { TokenUsernameRedeemModal } from "./TokenUsernameRedeemModal/TokenUsernameRedeemModal";

type CloseType = "email" | "password" | "username";

type TokenRedeemModalProperties = {
    close: (_type?: CloseType) => void;
    type: ForgotTokenType;
    token: string;
};

/**
 * Utility function generating the proper modal based off the type, and passing the token into the proper modal
 *
 * @param type - The type of token
 * @param token - The token itself
 * @returns The respective token modal according to the ForgotTokenType passed in
 */
const generateTokenModal = (
    type: ForgotTokenType,
    token: string,
    close: (_type?: CloseType) => void,
): JSX.Element => {
    switch (type) {
        case "email": {
            return <TokenEmailRedeemModal close={close} token={token} />;
        }
        case "username": {
            return <TokenUsernameRedeemModal close={close} token={token} />;
        }
        case "password": {
            return <TokenPasswordRedeemModal close={close} token={token} />;
        }
        default: {
            return <span />;
        }
    }
};

/**
 * This modal serves as the update hub for changing the user's values if they use a token redemption.
 *
 * @param {TokenRedeemModalProperties} props The type of token and the token itself
 */
export const TokenRedeemModal = ({
    close,
    type,
    token,
}: TokenRedeemModalProperties): JSX.Element => (
    <Modal
        onHide={(): void => {
            close();
        }}
        show
    >
        {generateTokenModal(type, token, close)}
    </Modal>
);
