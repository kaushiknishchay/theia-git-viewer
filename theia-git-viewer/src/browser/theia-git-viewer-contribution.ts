import { injectable, inject } from 'inversify';
import { FileService, FileServiceContribution } from '@theia/filesystem/lib/browser/file-service';
import { TheiaGitViewerStorageProvider } from './theia-git-viewer-storage-provider';

@injectable()
export class TheiaGitViewerStorageContribution implements FileServiceContribution {
    @inject(TheiaGitViewerStorageProvider)
    protected readonly provider: TheiaGitViewerStorageProvider;

    registerFileSystemProviders(service: FileService): void {
        const registering = this.provider.ready.then(() =>
            service.registerProvider('file', this.provider)
        );
        service.onWillActivateFileSystemProvider(event => {
            if (event.scheme === 'file') {
                event.waitUntil(registering);
            }
        });
    }
}