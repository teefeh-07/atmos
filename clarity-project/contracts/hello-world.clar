;; title: hello-world
;; version: 1.0.0
;; summary: A simple hello world contract demonstrating basic Clarity functionality
;; description: This contract provides greeting functionality with a counter

;; constants
(define-constant CONTRACT_OWNER tx-sender)
(define-constant ERR_UNAUTHORIZED (err u100))
(define-constant ERR_INVALID_NAME (err u101))

;; data vars
(define-data-var greeting (string-ascii 50) "Hello, World!")
(define-data-var greeting-count uint u0)

;; data maps
(define-map user-greetings principal uint)

;; public functions

;; Set a custom greeting (only contract owner can do this)
(define-public (set-greeting (new-greeting (string-ascii 50)))
  (begin
    (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    (asserts! (> (len new-greeting) u0) ERR_INVALID_NAME)
    (var-set greeting new-greeting)
    (ok true)
  )
)

;; Say hello and increment the counter
(define-public (say-hello (name (string-ascii 20)))
  (let
    (
      (current-count (var-get greeting-count))
      (user-count (default-to u0 (map-get? user-greetings tx-sender)))
    )
    (asserts! (> (len name) u0) ERR_INVALID_NAME)
    (var-set greeting-count (+ current-count u1))
    (map-set user-greetings tx-sender (+ user-count u1))
    (ok (concat (concat (var-get greeting) " ") name))
  )
)

;; read only functions

;; Get the current greeting
(define-read-only (get-greeting)
  (var-get greeting)
)

;; Get the total greeting count
(define-read-only (get-greeting-count)
  (var-get greeting-count)
)

;; Get how many times a specific user has been greeted
(define-read-only (get-user-greeting-count (user principal))
  (default-to u0 (map-get? user-greetings user))
)

;; Get contract owner
(define-read-only (get-contract-owner)
  CONTRACT_OWNER
)
