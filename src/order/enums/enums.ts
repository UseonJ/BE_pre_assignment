export enum ShippingStatus {
    READY = 0,       // 배송 준비 중
    SHIPPING = 1,    // 배송 중
    DELIVERED = 2,   // 배송 완료
    CANCELLED = 3    // 배송 취소
}

export enum PaymentStatus {
    READY = 0,       // 결제 시작 전
    PROCESSING = 1,  // 결제 처리 중
    COMPLETED = 2,   // 결제 완료
    FAILED = 3,      // 결제 실패
    CANCELLED = 4    // 결제 취소
}

export enum PaymentMethod {
    CREDIT_CARD = 0,      // 신용 카드
    DEBIT_CARD = 1,       // 직불 카드
    BANK_TRANSFER = 2,    // 계좌 이체
    PG = 3                 // 결제 게이트웨이
}