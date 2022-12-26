import { CancelNotification } from "@application/use-cases/cancel-notification";
import { CountRecipientNotifications } from "@application/use-cases/count-recipient-notifications";
import { GetRecipientNotifications } from "@application/use-cases/get-recipient-notifications";
import { ReadNotification } from "@application/use-cases/read-notification";
import { UnreadNotification } from "@application/use-cases/unread-notification";
import { Module } from "@nestjs/common";
import { SendNotification } from "./application/use-cases/send-notification";
import { DatabaseModule } from "./infra/database/database.module";
import { NotificationsController } from "./infra/http/controllers/notifications.controller";

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [
        SendNotification,
        CancelNotification,
        GetRecipientNotifications,
        CountRecipientNotifications,
        UnreadNotification,
        ReadNotification,
    ],
})
export class HttpModule{}