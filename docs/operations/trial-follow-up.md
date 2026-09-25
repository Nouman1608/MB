# Free trial requests: what happens after a family sends the form

*Written 2026-09-25 (D-330). Covers the English `/trial/` form. The translated
`/ar/ /ur/ /bn/` pages use the five-field enquiry form and get the staff email only.*

## What is automated, and what is not

| Step | Who / what | Trigger that really exists |
|---|---|---|
| Staff notification | `/api/enquiry` emails the private enquiry inbox, with Reply-To set to the family | The server validated the request, passed Turnstile and the rate limit, and Resend accepted the email |
| Acknowledgement to the family | `/api/enquiry` emails the family (`renderTrialAcknowledgement`), Reply-To `hello@marlbridge.com` | Sent only **after** the staff email is accepted, and only for trial requests. If it fails, the request still succeeds and the page says "We will reply to the email address you gave" instead of claiming a copy was sent |
| Proposing a teacher and time | **A person** (owner or admin), using template 2 | Manual: no availability or scheduling system exists |
| Confirming the class and joining details | **A person**, using template 3 | Manual |
| Rescheduling, or teacher unavailable | **A person**, using template 4 | Manual |

"Accepted by Resend" means the provider took the message; it does not prove it reached
the inbox. Nothing on the site says a class is booked.

Response commitment (approved, `PRICING_TERMS.enquiryResponse`): email within two working
days, WhatsApp within one working day.

## Reading the staff email

- **Subjects, Exam board, Group or one-to-one**: what the family chose. "Not sure" and
  "Help me decide" are genuine answers; help them decide on the call or reply.
- **Teacher asked for**: shown as "Name (preference, not yet checked for availability)".
  Check that the teacher teaches that course and has room **before** naming them in a
  reply. If they cannot, say so plainly (template 4). Never switch teachers silently.
- **Came from / Course id**: attribution for us (e.g. `resource`, `diagnostic`, `teacher`,
  `pricing`). Do not quote these to the family.
- Reply directly: the Reply-To header is the family's address.

## Times and time zones

Always write a proposed time with the **date, the time and the family's time zone**, and
our Lahore time:

> Tuesday 7 October 2026, 5:00 pm Gulf Standard Time (Dubai), which is 6:00 pm in Lahore (PKT)

- Work it out from the family's city using an IANA time-zone name (e.g. `Asia/Dubai`,
  `Europe/London`, `America/Toronto`), not a fixed offset. The UK, Europe and North
  America change clocks for daylight saving and Pakistan does not, so the gap changes
  during the year. Check the specific date, especially in late October and late March.
- If the family did not say their city, ask before proposing a time.

## Templates

Plain text. Replace the parts in [brackets]. Do not add prices or promises that are not
on the pricing page.

### 1. Request acknowledgement (sent automatically; use by hand if it failed)

Subject: We have received your free trial request - Marlbridge

> Hello [first name],
>
> Thank you. We have received your request for a free trial class with Marlbridge. This is
> a request, not a booking: no class has been scheduled yet.
>
> What you asked for: [subjects], [exam board], [group / one-to-one / help me decide],
> [teacher preference, if any].
>
> We reply to email enquiries within two working days, and to WhatsApp messages within one
> working day. We will propose a teacher and a time, shown in your own time zone. The class
> is only booked once you have agreed. The trial class is free, with no obligation to
> continue.
>
> Need to change something? Reply to this email, or message us on WhatsApp at
> +92 323 9149918.
>
> Marlbridge

### 2. Proposed teacher and time

Subject: Your free trial class: a proposed teacher and time

> Hello [first name],
>
> For [course, e.g. IGCSE Chemistry (0620)] we would like to offer a free trial [group class /
> one-to-one class] with [teacher name] ([link to their profile]).
>
> Proposed time: [weekday, date month year], [time] [family's time zone name] ([time] in
> Lahore, PKT). The class lasts [45 to 50 minutes (group) / 1 hour (one-to-one)].
>
> Does this suit you? If not, reply with two or three times that would, and we will find
> another. Nothing is booked until you confirm.
>
> Marlbridge

### 3. Confirmed class and joining instructions

Subject: Confirmed: your free trial class on [date]

> Hello [first name],
>
> Your free trial class is confirmed:
>
> - Course: [course]
> - Teacher: [teacher name]
> - When: [weekday, date month year], [time] [family's time zone] ([time] Lahore, PKT)
> - Length: [45 to 50 minutes / 1 hour]
> - How to join: [online class link and any passcode, or the academy address for in-person
>   classes in Lahore]
>
> Please join a few minutes early and have [a notebook / a calculator / past-paper
> questions you found hard]. If you need to move the class, just reply to this email: no
> notice period is needed.
>
> Marlbridge

*No notice period is required to move a confirmed trial class (owner decision, 25 Sep 2026,
register item 24, D-331).*

### 4. Rescheduling, or the requested teacher is unavailable

Subject: Your free trial class: a change

> Hello [first name],
>
> [Either:] We need to move your trial class on [date]. Could any of these work instead:
> [two or three options, each with date, time, family's time zone and Lahore time]?
>
> [Or:] You asked for [teacher name]. [He/She] [does not teach this course / has no room at
> the times you gave]. We can offer [other teacher, with profile link] instead, or look for
> a different time with [teacher name]. Which would you prefer?
>
> Nothing changes until you reply.
>
> Marlbridge

## Privacy and retention

The request lives only in the two emails; the site stores no copy. It is used only to
respond (see `/legal/privacy/`). Delete threads for families who do not continue, in line
with the privacy policy.
