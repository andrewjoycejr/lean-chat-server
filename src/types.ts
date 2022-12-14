
export interface Bubble {
    user: 'codex' | 'me'
    type: 'nl' | 'code'
    plaintext: string;
    id?: string;
}

// [todo] use JWT instead
export interface Session {
    id: string
    accessToken: string
    account: {
        id: string;
        label: string;
    }
    scopes: string[]
}

/** All of the information that is dumped to the database. */
export interface CallInfo {
    bubbles: Bubble[]
    inputText: string
    sessionId?: string
    userId: string
    responseId: string
    response: Bubble
    version?: string
    DENO_DEPLOYMENT_ID?: string
}

export interface ChatRequest {
    kind: 'chat'
    bubbles: Bubble[],
    inputText: string,
    session: Session
}

export interface PingRequest {
    kind: 'ping'
    session: Session
}

export interface RatingRequest {
    kind: 'rating';
    session: Session;
    responseId: string;
    val?: 1 | 0 | -1;
    comment?: string;
}

export type RequestJson  = ChatRequest | PingRequest | RatingRequest