interface IDBSettings {
  readonly host: string;
  readonly port: number;
  readonly username: string;
  readonly password: string;
  readonly database: string;
}

interface ILogSettings {
  readonly level: string;
  readonly timestamps: boolean;
  readonly silence: string[];
}

interface IAppSettings {
  readonly secretKey: string;
}

interface IJwtSettings {
  readonly secretKey: string;
  readonly expiresIn: number;
}

interface IApiUrls {
  readonly CORE_SERVICE: string;
}

interface IRabbitMQSettings {
  readonly name: string;
  readonly host: string;
  readonly vhost: string;
  readonly port: number;
  readonly username: string;
  readonly password: string;
}